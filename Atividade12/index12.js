document.write("Atividade 12 Conta <br><br>");

//get e set da função conta

function Conta(){

    this.getNome = function(){
        return this.nome;
    }

    this.setNome = function(nome){
        this.nome = nome;
    }

    this.getBanco = function(){
        return this.banco;
    }

    this.setBanco = function(banco){
        this.banco = banco;
    }

    this.getNumConta = function(){
        return this.numConta;
    }

    this.setNumConta = function(numConta){
        this.numConta = numConta;
    }

    this.getSaldo = function(){
        return this.saldo;
    }

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    }

    
}

//get e set da funão conta Corrente
function Corrente(){ 

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    };

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    };
}

//get e set da funão conta Poupança
function Poupanca(){ 
    
    this.getJuros = function(){
        return this.juros;
    };
    
    this.setJuros = function(juros){
        this.juros = juros;
    };

    this.getDataVencimento = function(){
        return this.dataVencimento;
    };
    
    this.setDataVencimento = function(dataVencimento){
        this.dataVencimento = dataVencimento;
    };
}


Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

objCorrente = new Corrente();
objPoupanca = new Poupanca();

// Dados de exibição conta corrente
objCorrente.setNome("ismael");
objCorrente.setBanco("Caixa");
objCorrente.setNumConta("27");
objCorrente.setSaldo(10000);
objCorrente.setSaldoEspecial(2000);

// Dados de exibição conta poupança
objPoupanca.setNome("Brunin");
objPoupanca.setBanco("Bradesco");
objPoupanca.setNumConta("5");
objPoupanca.setSaldo(20000);
objPoupanca.setJuros(2500);
objPoupanca.setDataVencimento("28/10/2023");

//exibição corrente
document.write("Dados da conta corrente:<br>Nome: " + objCorrente.getNome() + 
                "<br>Banco: " + objCorrente.getBanco() + 
                "<br>Número da Conta: " + objCorrente.getNumConta() +
                "<br>Saldo: " + objCorrente.getSaldo() +
                "<br>Saldo Especial: " + objCorrente.getSaldoEspecial());

 //exibição poupança              
document.write("<br><br>Dados da conta poupança:<br>Nome: " + objPoupanca.getNome() + 
                "<br>Banco: " + objPoupanca.getBanco() + 
                "<br>Número da Conta: " + objPoupanca.getNumConta() +
                "<br>Saldo: " + objPoupanca.getSaldo() +
                "<br>Juros: " + objPoupanca.getJuros() +
                "<br>Data de vencimento: " + objPoupanca.getDataVencimento());