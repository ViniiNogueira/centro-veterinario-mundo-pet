
const numeroClinica = '5511999259171';

const form = document.getElementById('form-contato');
const statusForm = document.getElementById('status-form');

if (form && statusForm) {
    const telefone = document.getElementById('telefone-contato');
    const termos = document.getElementById('termos-contato');

    const campos = form.querySelectorAll(
        'input:not([type="checkbox"]), select, textarea'
    );

    // Máscara para telefone brasileiro
    telefone.addEventListener('input', () => {
        let valor = telefone.value.replace(/\D/g, '').slice(0, 11);

        if (valor.length > 10) {
            valor = valor.replace(
                /^(\d{2})(\d{5})(\d{4})$/,
                '($1) $2-$3'
            );
        } else if (valor.length > 6) {
            valor = valor.replace(
                /^(\d{2})(\d{4})(\d{0,4})$/,
                '($1) $2-$3'
            );
        } else if (valor.length > 2) {
            valor = valor.replace(
                /^(\d{2})(\d{0,5})$/,
                '($1) $2'
            );
        } else if (valor.length > 0) {
            valor = `(${valor}`;
        }

        telefone.value = valor;
    });

    // Mensagens de validação
    function mensagemErro(campo) {
        const validade = campo.validity;

        if (validade.valueMissing) {
            return 'Preencha este campo.';
        }

        if (validade.tooShort) {
            return `Digite pelo menos ${campo.minLength} caracteres.`;
        }

        if (validade.typeMismatch && campo.type === 'email') {
            return 'Digite um endereço de e-mail válido.';
        }

        if (validade.patternMismatch && campo.type === 'tel') {
            return 'Use o formato (11) 99999-9999.';
        }

        return '';
    }

    // Validação individual
    function validarCampo(campo) {
        const erro = mensagemErro(campo);

        let aviso = document.getElementById(`erro-${campo.id}`);

        if (!aviso) {
            aviso = document.createElement('span');
            aviso.id = `erro-${campo.id}`;
            aviso.className = 'erro-campo';

            campo.insertAdjacentElement('afterend', aviso);
            campo.setAttribute('aria-describedby', aviso.id);
        }

        aviso.textContent = erro;
        campo.setAttribute('aria-invalid', erro ? 'true' : 'false');

        return erro === '';
    }

    // Validação ao sair do campo e durante a correção
    campos.forEach((campo) => {
        campo.addEventListener('blur', () => {
            validarCampo(campo);
        });

        campo.addEventListener('input', () => {
            if (campo.getAttribute('aria-invalid') === 'true') {
                validarCampo(campo);
            }
        });

        campo.addEventListener('change', () => {
            if (campo.getAttribute('aria-invalid') === 'true') {
                validarCampo(campo);
            }
        });
    });

    // Envio pelo WhatsApp
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let tudoValidado = true;
        let primeiroCampoInvalido = null;

        campos.forEach((campo) => {
            if (!validarCampo(campo)) {
                tudoValidado = false;

                if (!primeiroCampoInvalido) {
                    primeiroCampoInvalido = campo;
                }
            }
        });

        if (!termos.checked) {
            statusForm.textContent =
                'Você precisa concordar com o contato da clínica.';

            termos.focus();
            return;
        }

        if (!tudoValidado) {
            statusForm.textContent =
                'Corrija os campos destacados e tente novamente.';

            primeiroCampoInvalido.focus();
            return;
        }

        const nome = document.getElementById('nome-contato').value.trim();
        const email = document.getElementById('email-contato').value.trim();
        const tel = telefone.value.trim();

        const assunto = document.getElementById('assunto-contato');
        const assuntoTexto =
            assunto.options[assunto.selectedIndex].text;

        const mensagem =
            document.getElementById('mensagem-contato').value.trim();

        const linhas = [
            'Olá! Vim pelo site da Clínica Veterinária Mundo Pet.',
            '',
            '*Nome:* ' + nome,
            '*Telefone:* ' + tel,
        ];

        if (email) {
            linhas.push('*E-mail:* ' + email);
        }

        linhas.push(
            '*Assunto:* ' + assuntoTexto,
            '',
            '*Mensagem:*',
            mensagem
        );

        const texto = encodeURIComponent(linhas.join('\n'));

        const url = `https://wa.me/${numeroClinica}?text=${texto}`;

        window.open(url, '_blank', 'noopener,noreferrer');

        statusForm.textContent =
            'Abrindo o WhatsApp. Confirme o envio da mensagem por lá.';

        form.reset();
    });

    // Limpeza do formulário
    form.addEventListener('reset', () => {
        statusForm.textContent = '';

        campos.forEach((campo) => {
            campo.setAttribute('aria-invalid', 'false');

            const aviso = document.getElementById(`erro-${campo.id}`);

            if (aviso) {
                aviso.textContent = '';
            }
        });

        termos.setAttribute('aria-invalid', 'false');
    });
}
//