const numeroClinica = '5511999259171';

const form = document.getElementById('form-contato');
const statusForm = document.getElementById('status-form');
const telefone = document.getElementById('telefone-contato');
const termos = document.getElementById('termos-contato');
const erroTermos = document.getElementById('erro-termos-contato');

const campos = form.querySelectorAll(
    'input:not([type="checkbox"]), select, textarea'
);

// Máscara para telefone
telefone.addEventListener('input', () => {
    let valor = telefone.value.replace(/\D/g, '').slice(0, 11);

    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (valor.length > 0) {
        valor = `(${valor}`;
    }

    telefone.value = valor;
});

// Mensagens de validação
function mensagemErro(campo) {
    const v = campo.validity;

    if (v.valueMissing) return 'Preencha este campo.';
    if (v.typeMismatch && campo.type === 'email') return 'Digite um e-mail válido.';
    if (v.tooShort) return `Digite pelo menos ${campo.minLength} caracteres.`;
    if (v.patternMismatch) {
        return campo.type === 'tel'
            ? 'Use o formato (11) 99999-9999.'
            : 'Formato inválido.';
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

    ['input', 'change'].forEach((tipo) => {
        campo.addEventListener(tipo, () => {
            if (campo.getAttribute('aria-invalid') === 'true') {
                validarCampo(campo);
            }
        });
    });
});

function validarTermos() {
    const erro = termos.checked
        ? ''
        : 'Confirme que as informações são verdadeiras e concorde com o contato da clínica.';

    erroTermos.textContent = erro;
    termos.setAttribute('aria-invalid', erro ? 'true' : 'false');

    return erro === '';
}

termos.addEventListener('change', validarTermos);

// Envio pelo WhatsApp
form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let tudoValidado = true;
    campos.forEach((campo) => {
        if (!validarCampo(campo)) tudoValidado = false;
    });

    const termosValido = validarTermos();

    if (!tudoValidado || !termosValido) {
        statusForm.textContent = '';
        statusForm.classList.remove('form-status--erro');
        return;
    }

    statusForm.classList.remove('form-status--erro');

    const nome = document.getElementById('nome-contato').value.trim();
    const email = document.getElementById('email-contato').value.trim();
    const tel = telefone.value.trim();
    const mensagem = document.getElementById('mensagem-contato').value.trim();

    const assunto = document.getElementById('assunto-contato');
    const assuntoTexto = assunto.options[assunto.selectedIndex].text;

    const linhas = [
        'Olá! Vim pelo site da Clínica Veterinária Mundo Pet e gostaria de entrar em contato.',
        '',
        `*Nome:* ${nome}`,
        `*WhatsApp:* ${tel}`,
    ];

    if (email) linhas.push(`*E-mail:* ${email}`);

    linhas.push(`*Assunto:* ${assuntoTexto}`, '', `*Mensagem:* ${mensagem}`);

    const texto = encodeURIComponent(linhas.join('\n'));
    const url = `https://wa.me/${numeroClinica}?text=${texto}`;

    window.open(url, '_blank', 'noopener,noreferrer');

    // O reset limpa o status, então a mensagem vem depois dele
    form.reset();
    statusForm.textContent =
        'Abrindo o WhatsApp. Confirme o envio da mensagem por lá.';
});

// Limpa mensagens e estados de erro ao resetar
form.addEventListener('reset', () => {
    statusForm.textContent = '';
    statusForm.classList.remove('form-status--erro');
    erroTermos.textContent = '';
    termos.setAttribute('aria-invalid', 'false');
    form.querySelectorAll('.erro-campo').forEach((e) => (e.textContent = ''));
    campos.forEach((campo) => campo.setAttribute('aria-invalid', 'false'));
});