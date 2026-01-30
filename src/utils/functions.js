export function verificarValorNull(valor) {
    return valor === null;
}

function decidirSaidaDoPrompt() {
    return confirm("Você deseja sair da aplicação?");
}

export function retornarValorPrompt(textoPrompt, funcaoDeVerificacao) {
    let valor;

    do {
        valor = prompt(textoPrompt);

        if (verificarValorNull(valor)) {
            if (decidirSaidaDoPrompt()) {
                return null;
            }
        }
    } while (valor === null || !funcaoDeVerificacao(valor));
    return valor;
}

/**
 * Verifica se algum valor do tipo string foi inserido
 * 
 * ---
 * @param {string} valor - valor que será verificado.
 * @returns {boolean} retorna verdadeiro caso haja um valor, e falso caso não haja
 */

export function verificarSeExisteValor(valor) {
    if (valor.trim() !== "") {
        return true;
    }
    alert("Nenhum valor foi digitado!");
    return false;
}

export function receberString(textoPrompt){
    let texto;

    texto = retornarValorPrompt(
        textoPrompt, 
        (valor) => verificarSeExisteValor(valor)
    );
    
    if(verificarValorNull(texto)) return null;

    return texto;
}

/**
 * Verifica se o valor ou os valores fornecidos são numéricos.
 * 
 * Se um valor não numérico for encontrado, um alerta será exibido.
 * 
 * @param {(number|number[])} valor - O valor ou array de valores a serem verificados.
 * @returns {boolean} Retorna true se todos os valores forem numéricos, caso contrário, retorna false.
 */
export function verificarValorNumerico(valor) {
    if (Array.isArray(valor)) {
        for (let i = 0; i < valor.length; i++) {
            if (isNaN(valor[i])) {
                alertarAusenciaDeNumero(valor);
                return false;
            }
        }
    } else if (isNaN(valor)) {
        alertarAusenciaDeNumero(valor);
        return false;
    }

    return true;
}

function alertarAusenciaDeNumero(valor) {
    alert(`${valor} não é um valor númerico!`);
}

/**
 * Verifica se o valor fornecido existe e se é numérico.
 * 
 * Esta função combina a verificação de existência de valor e a verificação de valor numérico.
 * 
 * @param {*} valor - O valor a ser verificado.
 * @returns {boolean} Retorna true se o valor existir e for numérico, caso contrário, retorna false.
 */
export function verificarPromptNumerico(valor) {
    return verificarSeExisteValor(valor) && verificarValorNumerico(valor);
}

export function receberValorNumerico(textoPrompt){
    let numero;

    numero = retornarValorPrompt(
        textoPrompt, 
        (valor) => verificarPromptNumerico(valor)
    );
    
    if(verificarValorNull(numero)) return null;

    numero = Number(numero);

    return numero;
} 

export function receberNumeroEspecifico(textoPrompt, arrayNumeros = []){
    let numero;
    let numeroValido;
    do{
        numero = receberValorNumerico(textoPrompt);
        if(verificarValorNull(numero)) return null;

        numeroValido = arrayNumeros.includes(numero);
        if(!numeroValido) alert("Número inválido! Tente novamente...")

    } while(!numeroValido);

    return numero;
}


export function receberValorPositivo(textoPrompt, textoErroOpcional = ""){
    let numero;
    let positivo;

    do{
        
        numero = receberValorNumerico(textoPrompt);
        if(verificarValorNull(numero)) return null;

        positivo = Math.sign(numero) === 1;
        if(!positivo) alert(textoErroOpcional || "Você digitou um número que não é positivo, tente novamente");

    } while(!positivo)
    
    return numero;
}