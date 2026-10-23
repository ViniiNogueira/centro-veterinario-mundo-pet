const numeroClinica = '5511999259171';

const form = document.getElementById('form-orcamento');
const statusForm = document.getElementById('status-form');
const telefone = document.getElementById('telefone-tutor');
const termos = document.getElementById('termos-orcamento');

// Máscara do telefone: (11) 99999-9999
telefone.addEventListener('input', () => {
    let v = telefone.value.replace(/\D/g, '').slice(0, 11);

    if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (v.length > 0) {
        v = v.replace(/^(\d{0,2})$/, '($1');
    }

    telefone.value = v;
});

function mensagemErro(campo) {
    const v = campo.validity;

    if (v.valueMissing) return 'Preencha este campo.';
    if (v.tooShort) return `Digite pelo menos ${campo.minLength} caracteres.`;
    if (v.patternMismatch && campo.type === 'tel') return 'Use o formato (11) 99999-9999.';

    return '';
}

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

const campos = form.querySelectorAll('input:not([type="checkbox"]), select, textarea');

campos.forEach((campo) => {
    campo.addEventListener('blur', () => validarCampo(campo));

    campo.addEventListener('input', () => {
        if (campo.getAttribute('aria-invalid') === 'true') validarCampo(campo);
    });
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let tudoValidado = true;
    campos.forEach((campo) => {
        if (!validarCampo(campo)) tudoValidado = false;
    });

    if (!tudoValidado) {
        statusForm.textContent = 'Corrija os campos destacados e tente novamente.';
        return;
    }

    if (!termos.checked) {
        statusForm.textContent = 'Você precisa concordar com o contato da clínica.';
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

    window.open(url, '_blank', 'noopener');

    statusForm.textContent = 'Abrindo o WhatsApp para você enviar a mensagem...';
    form.reset();
});

form.addEventListener('reset', () => {
    statusForm.textContent = '';
    form.querySelectorAll('.erro-campo').forEach((e) => (e.textContent = ''));
    campos.forEach((campo) => campo.setAttribute('aria-invalid', 'false'));
});