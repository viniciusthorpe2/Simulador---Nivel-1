const dados = [
  {
    "orgao": "Polícia Civil",
    "data": "01/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "02/01/2024",
    "valor": 6000.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Militar",
    "data": "03/01/2024",
    "valor": 4500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "04/01/2024",
    "valor": 7000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "05/01/2024",
    "valor": 3500.00,
    "status": "falha",
    "motivo": "Documentação incompleta"
  },
  {
    "orgao": "Receita Federal",
    "data": "06/01/2024",
    "valor": 8000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "07/01/2024",
    "valor": 9000.00,
    "status": "falha",
    "motivo": "Erro no sistema"
  },
  {
    "orgao": "Defesa Civil",
    "data": "08/01/2024",
    "valor": 4000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "09/01/2024",
    "valor": 5000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "10/01/2024",
    "valor": 6500.00,
    "status": "falha",
    "motivo": "Falta de recursos"
  },
  {
    "orgao": "Ibama",
    "data": "11/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "12/01/2024",
    "valor": 6000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "13/01/2024",
    "valor": 3000.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "14/01/2024",
    "valor": 7000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "15/01/2024",
    "valor": 8000.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "16/01/2024",
    "valor": 5200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "17/01/2024",
    "valor": 6100.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "18/01/2024",
    "valor": 4600.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "19/01/2024",
    "valor": 7100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "20/01/2024",
    "valor": 3600.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "21/01/2024",
    "valor": 8100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "22/01/2024",
    "valor": 9100.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "23/01/2024",
    "valor": 4100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "24/01/2024",
    "valor": 5100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "25/01/2024",
    "valor": 6600.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "26/01/2024",
    "valor": 5600.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "27/01/2024",
    "valor": 6100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "28/01/2024",
    "valor": 3100.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "29/01/2024",
    "valor": 7100.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "30/01/2024",
    "valor": 8100.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "31/01/2024",
    "valor": 5300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "01/01/2024",
    "valor": 6200.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "02/01/2024",
    "valor": 4700.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "03/01/2024",
    "valor": 7200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "04/01/2024",
    "valor": 3700.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "05/01/2024",
    "valor": 8200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "06/01/2024",
    "valor": 9200.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "07/01/2024",
    "valor": 4200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "08/01/2024",
    "valor": 5200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "09/01/2024",
    "valor": 6700.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "10/01/2024",
    "valor": 5700.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "11/01/2024",
    "valor": 6200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "12/01/2024",
    "valor": 3200.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "13/01/2024",
    "valor": 7200.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "14/01/2024",
    "valor": 8200.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "15/01/2024",
    "valor": 5400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "16/01/2024",
    "valor": 6300.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "17/01/2024",
    "valor": 4800.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "18/01/2024",
    "valor": 7300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "19/01/2024",
    "valor": 3800.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "20/01/2024",
    "valor": 8300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "21/01/2024",
    "valor": 9300.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "22/01/2024",
    "valor": 4300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "23/01/2024",
    "valor": 5300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "24/01/2024",
    "valor": 6800.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "25/01/2024",
    "valor": 5800.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "26/01/2024",
    "valor": 6300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "27/01/2024",
    "valor": 3300.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "28/01/2024",
    "valor": 7300.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "29/01/2024",
    "valor": 8500.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "30/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "31/01/2024",
    "valor": 6400.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "01/01/2024",
    "valor": 4900.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "02/01/2024",
    "valor": 7400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "03/01/2024",
    "valor": 3900.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "04/01/2024",
    "valor": 8400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "05/01/2024",
    "valor": 9400.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "06/01/2024",
    "valor": 4400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "07/01/2024",
    "valor": 5400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "08/01/2024",
    "valor": 6900.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "09/01/2024",
    "valor": 5900.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "10/01/2024",
    "valor": 6400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "11/01/2024",
    "valor": 3400.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "12/01/2024",
    "valor": 7400.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "13/01/2024",
    "valor": 8400.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "14/01/2024",
    "valor": 5600.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "15/01/2024",
    "valor": 6500.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "16/01/2024",
    "valor": 5000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Corpo de Bombeiros",
    "data": "17/01/2024",
    "valor": 7500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Guarda Municipal",
    "data": "18/01/2024",
    "valor": 4000.00,
    "status": "falha",
    "motivo": "Sistema fora do ar"
  },
  {
    "orgao": "Receita Federal",
    "data": "19/01/2024",
    "valor": 8500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Ministério Público",
    "data": "20/01/2024",
    "valor": 9500.00,
    "status": "falha",
    "motivo": "Recursos insuficientes"
  },
  {
    "orgao": "Defesa Civil",
    "data": "21/01/2024",
    "valor": 4500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Detran",
    "data": "22/01/2024",
    "valor": 5500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Federal",
    "data": "23/01/2024",
    "valor": 7000.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Ibama",
    "data": "24/01/2024",
    "valor": 6000.00,
    "status": "sucesso"
  },
  {
    "orgao": "Anvisa",
    "data": "25/01/2024",
    "valor": 6500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Inmetro",
    "data": "26/01/2024",
    "valor": 3500.00,
    "status": "falha",
    "motivo": "Dados incorretos"
  },
  {
    "orgao": "Cetesb",
    "data": "27/01/2024",
    "valor": 7500.00,
    "status": "sucesso"
  },
  {
    "orgao": "Susep",
    "data": "28/01/2024",
    "valor": 8500.00,
    "status": "falha",
    "motivo": "Problemas técnicos"
  },
  {
    "orgao": "Polícia Civil",
    "data": "29/01/2024",
    "valor": 5700.00,
    "status": "sucesso"
  },
  {
    "orgao": "Polícia Rodoviária Federal",
    "data": "30/01/2024",
    "valor": 6600.00,
    "status": "falha",
    "motivo": "Erro humano"
  },
  {
    "orgao": "Polícia Militar",
    "data": "31/01/2024",
    "valor": 5100.00,
    "status": "sucesso"
  }
];

// ===========================================================
// 6) HISTÓRIA DE USUÁRIO 5 – TRATAMENTO DE ERROS
// Filtrar transações inválidas (status = "falha" e sem motivo)
// ===========================================================

function detectarTransacoesInvalidas(dados) {
  return dados.filter(t => t.status === "falha" && (!t.motivo || t.motivo.trim() === ""));
}



// ===========================================================
// Remover transações inválidas antes de todas as estatísticas
// ===========================================================
function filtrarTransacoesValidas(dados) {
  return dados.filter(t => !(t.status === "falha" && (!t.motivo || t.motivo.trim() === "")));
}



// ===========================================================
// 1) HISTÓRIA DE USUÁRIO 1 — Contagem total
// ===========================================================

function mostrarQuantidadeTotal(transacoes) {
  console.log(`Total de repasses processados: ${transacoes.length}`);
}



// ===========================================================
// 2) HISTÓRIA DE USUÁRIO 2 — Análises por status
// ===========================================================

function gerarResumoSucesso(transacoes) {
  const sucesso = transacoes.filter(t => t.status === "sucesso");

  const totalSucesso = sucesso.length;

  const sucessoPorOrgao = sucesso.reduce((acc, t) => {
    acc[t.orgao] = (acc[t.orgao] || 0) + 1;
    return acc;
  }, {});

  const valorTotal = sucesso.reduce((acc, t) => acc + t.valor, 0);

  const valorPorOrgao = sucesso.reduce((acc, t) => {
    acc[t.orgao] = (acc[t.orgao] || 0) + t.valor;
    return acc;
  }, {});

  console.log("\n===== RESUMO SUCESSO =====");
  console.log("Total de repasses bem sucedidos:", totalSucesso);
  console.log("Total por órgão:", sucessoPorOrgao);
  console.log("Valor total de repasses com sucesso:", valorTotal);
  console.log("Valor total por órgão:", valorPorOrgao);
}


function gerarResumoFalha(transacoes) {
  const falhas = transacoes.filter(t => t.status === "falha");

  const totalFalhas = falhas.length;

  const falhasPorOrgao = falhas.reduce((acc, t) => {
    acc[t.orgao] = (acc[t.orgao] || 0) + 1;
    return acc;
  }, {});

  const falhasPorMotivo = falhas.reduce((acc, t) => {
    acc[t.motivo] = (acc[t.motivo] || 0) + 1;
    return acc;
  }, {});

  const valorTotalFalhas = falhas.reduce((acc, t) => acc + t.valor, 0);

  const valorPorOrgao = falhas.reduce((acc, t) => {
    acc[t.orgao] = (acc[t.orgao] || 0) + t.valor;
    return acc;
  }, {});

  const valorPorMotivo = falhas.reduce((acc, t) => {
    acc[t.motivo] = (acc[t.motivo] || 0) + t.valor;
    return acc;
  }, {});

  console.log("\n===== RESUMO FALHA =====");
  console.log("Total de repasses com falha:", totalFalhas);
  console.log("Total de falhas por órgão:", falhasPorOrgao);
  console.log("Falhas por motivo:", falhasPorMotivo);
  console.log("Valor total de repasses com falha:", valorTotalFalhas);
  console.log("Valor por órgão:", valorPorOrgao);
  console.log("Valor por motivo:", valorPorMotivo);
}



// ===========================================================
// 3) HISTÓRIA DE USUÁRIO 3 — Estatísticas avançadas
// ===========================================================

function gerarEstatisticas(transacoes) {
  const maior = transacoes.reduce((a, b) => a.valor > b.valor ? a : b);
  const menor = transacoes.reduce((a, b) => a.valor < b.valor ? a : b);

  const repassesPorDia = transacoes.reduce((acc, t) => {
    acc[t.data] = (acc[t.data] || 0) + 1;
    return acc;
  }, {});

  const repassesPorOrgao = transacoes.reduce((acc, t) => {
    acc[t.orgao] = (acc[t.orgao] || 0) + 1;
    return acc;
  }, {});

  const sucessoPorOrgao = transacoes.filter(t => t.status === "sucesso")
    .reduce((acc, t) => {
      acc[t.orgao] = (acc[t.orgao] || 0) + 1;
      return acc;
    }, {});

  const falhasPorOrgao = transacoes.filter(t => t.status === "falha")
    .reduce((acc, t) => {
      acc[t.orgao] = (acc[t.orgao] || 0) + 1;
      return acc;
    }, {});

  const falhasPorMotivo = transacoes.filter(t => t.status === "falha")
    .reduce((acc, t) => {
      acc[t.motivo] = (acc[t.motivo] || 0) + 1;
      return acc;
    }, {});

  const diaMaisRepasses = Object.entries(repassesPorDia)
    .sort((a, b) => b[1] - a[1])[0];

  const orgaoMaisRepasses = Object.entries(repassesPorOrgao)
    .sort((a, b) => b[1] - a[1])[0];

  const orgaoMaisSucesso = Object.entries(sucessoPorOrgao)
    .sort((a, b) => b[1] - a[1])[0];

  const orgaoMaisFalhas = Object.entries(falhasPorOrgao)
    .sort((a, b) => b[1] - a[1])[0];

  const motivoMaisFalhas = Object.entries(falhasPorMotivo)
    .sort((a, b) => b[1] - a[1])[0];

  console.log("\n===== ESTATÍSTICAS =====");
  console.log("Maior repasse:", maior);
  console.log("Menor repasse:", menor);
  console.log("Dia com mais repasses:", diaMaisRepasses);
  console.log("Órgão com mais repasses:", orgaoMaisRepasses);
  console.log("Órgão com mais sucessos:", orgaoMaisSucesso);
  console.log("Órgão com mais falhas:", orgaoMaisFalhas);
  console.log("Motivo mais frequente de falhas:", motivoMaisFalhas);
}



// ===========================================================
// 4) HISTÓRIA DE USUÁRIO 4 — Buscar repasses por órgão
// ===========================================================

function buscarPorOrgao(transacoes, orgao) {
  const resultado = transacoes.filter(t => t.orgao === orgao);

  console.log(`\n===== TRANSAÇÕES DO ÓRGÃO: ${orgao} =====`);
  if (resultado.length === 0) {
    console.log("Nenhum repasse encontrado.");
  } else {
    console.log(resultado);
  }
}



// ===========================================================
// EXECUÇÃO COMPLETA DO SISTEMA
// ===========================================================

function executarSistema(dados, orgaoParaBusca) {

  console.log("\n===== TRATAMENTO DE ERROS =====");
  const transacoesInvalidas = detectarTransacoesInvalidas(dados);
  console.log("Transações inválidas identificadas:", transacoesInvalidas);

  const validas = filtrarTransacoesValidas(dados);

  console.log("\n===== HISTÓRIA 1 =====");
  mostrarQuantidadeTotal(validas);

  console.log("\n===== HISTÓRIA 2 =====");
  gerarResumoSucesso(validas);
  gerarResumoFalha(validas);

  console.log("\n===== HISTÓRIA 3 =====");
  gerarEstatisticas(validas);

  console.log("\n===== HISTÓRIA 4 =====");
  buscarPorOrgao(validas, orgaoParaBusca);

  console.log("\n===== FIM DO PROCESSAMENTO =====");
}



// ===========================================================
// CHAMADA DO SISTEMA
// ===========================================================
// inserir o órgão a ser buscado automaticamente (História 4)
executarSistema(dados, "Polícia Civil");
