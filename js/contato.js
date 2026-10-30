
const numeroClinica = '5511999259171';

const telefone = document.getElementById('telefone-tutor');
const termos = document.getElementById('termos-orcamento');

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

    if (v.valueMissing) return 'Preencha este campo.';
    if (v.tooShort) return `Digite pelo menos ${campo.minLength} caracteres.`;
    if (v.patternMismatch && campo.type === 'tel') return 'Use o formato (11) 99999-9999.';

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
    campos.forEach((campo) => {
        if (!validarCampo(campo)) tudoValidado = false;
    });

    if (!termos.checked) {
        statusForm.textContent = 'Você precisa concordar com o contato da clínica.';
        return;
    }

    if (!tudoValidado) {
        statusForm.textContent = 'Corrija os campos destacados e tente novamente.';
        return;
    }

    const nomeTutor = document.getElementById('nome-tutor').value.trim();
    const tel = telefone.value.trim();
    const nomePet = document.getElementById('nome-pet').value.trim();
    const detalhes = document.getElementById('detalhes-orcamento').value.trim();

    const especie = document.getElementById('especie-pet');
    const especieTexto = especie.options[especie.selectedIndex].text;

    const servico = document.getElementById('servico-orcamento');
    const servicoTexto = servico.options[servico.selectedIndex].text;

    const linhas = [
        'Olá! Vim pelo site da Clínica Veterinária Mundo Pet e gostaria de solicitar um orçamento.',
        '',
        `*Tutor:* ${nomeTutor}`,
        `*WhatsApp:* ${tel}`,
        `*Pet:* ${nomePet} (${especieTexto})`,
        `*Serviço:* ${servicoTexto}`,
    ];

    if (detalhes) linhas.push('', `*Detalhes:* ${detalhes}`);

        const texto = encodeURIComponent(linhas.join('\n'));

        const url = `https://wa.me/${numeroClinica}?text=${texto}`;

        window.open(url, '_blank', 'noopener,noreferrer');

        statusForm.textContent =
            'Abrindo o WhatsApp. Confirme o envio da mensagem por lá.';

    statusForm.textContent = 'Abrindo o WhatsApp para você enviar a mensagem...';
    form.reset();
});

form.addEventListener('reset', () => {
    statusForm.textContent = '';
    form.querySelectorAll('.erro-campo').forEach((e) => (e.textContent = ''));
    campos.forEach((campo) => campo.setAttribute('aria-invalid', 'false'));
});