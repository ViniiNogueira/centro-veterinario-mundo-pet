const numeroNicole = '5511999259171';

const form = document.getElementById('form-contato');

const statusForm = document.getElementById('status-form'); // variavel referente ao status do formulario (contato, linha: 142)

const telefone = document.getElementById('telefone-contato');

const termos = document.getElementById('termos-contato');


telefone.addEventListener('input', () => {

    // \D -> tudo que nao é numero remove tudo 
    // e corta em até 11 digitos
    let v = telefone.value.replace(/\D/g, '').slice(0, 11);

    if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (v.length > 6) {
        // de 7 a 10 dígitos: (11) 9925-9171 (ainda digitando)
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (v.length > 2) {
        // de 3 a 6 dígitos: (11) 9992
        v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (v.length > 0) {
        // 1 ou 2 dígitos: (1
        v = v.replace(/^(\d{0,2})$/, '($1');
    }

    telefone.value = v;
});

function mensagemErro(campo) {
    const v = campo.validity; // aq ele ja recebe o cammpo sabendo se ta certo ou errado

    //validacao das msg de erro

    if (v.valueMissing) return 'Preencha este campo.';

    if (v.tooShort) return `Digite pelo menos ${campo.minLength} caracteres.`;

    if (v.typeMismatch && campo.type === 'email') return 'Digite um e-mail válido.';

    if (v.patternMismatch && campo.type === 'tel') return 'Use o formato (11) 99999-9999.';

    return '';
}

function validarCampo(campo) {
    const erro = mensagemErro(campo);

    // Procura um <span> de erro já criado para este campo...
    let aviso = document.getElementById(`erro-${campo.id}`);

    // se não existir, cria um logo depois do campo (só na primeira vez)
    if (!aviso) {
        aviso = document.createElement('span');
        aviso.id = `erro-${campo.id}`;
        aviso.className = 'erro-campo'; // classe para estilizar no CSS
        campo.insertAdjacentElement('afterend', aviso);

        // Acessibilidade: o leitor de tela lê o erro junto com o campo
        campo.setAttribute('aria-describedby', aviso.id);
    }

    aviso.textContent = erro; // escreve o erro (ou apaga, se for '')

    // aria-invalid="true" avisa leitores de tela e deixa o CSS pintar a borda
    campo.setAttribute('aria-invalid', erro ? 'true' : 'false');

    return erro === ''; // true = campo válido
}


const campos = form.querySelectorAll('input:not([type="checkbox"]), select, textarea');

campos.forEach((campo) => { // para cada campo

    // valida quando a pessoa sai do campo
    campo.addEventListener('blur', () => validarCampo(campo));

    // se o campo tiver com erro, valida de novo
    campo.addEventListener('input', () => {
        if (campo.getAttribute('aria-invalid') === 'true') validarCampo(campo);
    });
});


// ao enviar tem q levar pro wpp
form.addEventListener('submit', (evento) => {
    // Por padrão, enviar um form recarrega a página.
    // preventDefault() cancela isso, e nós controlamos o que acontece.
    evento.preventDefault();

    let tudoValidado = true;
    campos.forEach((campo) => {
        if (!validarCampo(campo)) tudoValidado = false;
    });

    if (!termos.checked) {
        statusForm.textContent = 'Você precisa concordar com o contato da clínica.';
        return; // return = para a função aqui e não envia
    }

    if (!tudoValidado) {
        statusForm.textContent = 'Corrija os campos destacados e tente novamente.';
        return;
    }

    const nome = document.getElementById('nome-contato').value.trim();
    const email = document.getElementById('email-contato').value.trim();
    const tel = telefone.value.trim();
    const mensagem = document.getElementById('mensagem-contato').value.trim();

    // No <select>, .value dá o código interno (ex: "banho-tosa").
    // Queremos o texto que a pessoa viu (ex: "Banho e Tosa"):
    const assunto = document.getElementById('assunto-contato');
    const assuntoTexto = assunto.options[assunto.selectedIndex].text;

    const linhas = [
        'Olá! Vim pelo site da Clínica Veterinária Mundo Pet.',
        '', // linha em branco
        `*Nome:* ${nome}`,
        `*Telefone:* ${tel}`,
    ];

    if (email) linhas.push(`*E-mail:* ${email}`);

    linhas.push(`*Assunto:* ${assuntoTexto}`, '', `*Mensagem:* ${mensagem}`);

    // join('\n') junta as linhas separadas por quebra de linha.
    // encodeURIComponent converte acentos, espaços e quebras de
    // linha para um formato seguro de colocar dentro de um link.
    const texto = encodeURIComponent(linhas.join('\n'));
    const url = `https://wa.me/${numeroNicole}?text=${texto}`;

    window.open(url, '_blank', 'noopener');

    statusForm.textContent = 'Abrindo o WhatsApp para você enviar a mensagem...';
    form.reset(); // limpa o formulário
});


form.addEventListener('reset', () => {
    statusForm.textContent = '';

    // Apaga o texto de todos os erros
    form.querySelectorAll('.erro-campo').forEach((e) => (e.textContent = ''));

    // Tira o destaque vermelho dos campos
    campos.forEach((campo) => campo.setAttribute('aria-invalid', 'false'));
});