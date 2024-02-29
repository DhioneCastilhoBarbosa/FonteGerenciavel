# FONTE GERENCIAVEL EFT4804G

## Introdução

Este é um projeto de uma fonte de energia de 48 volts 4 amperes, sua principal funcionalidade e forncerce energia mesmo durante uma falha de forncecimento da rede eletrica por meio de banco de baterias.
Seu principal aplicação de cenario e no ambiente de telecomunicação fornecendo energia para OLTs e demais dispositivos.

### Divisão do proejto

Este projeto se divide em 3 partes: <br>
* Firmware da placa da fonte de potencia;
* Firmware da placa de gerenciamento
* Pagina de configuração da fonte.


### Status do Desenvolvimento

1- Firmware da placa de fonte de potencia.
- Firmware 98% ja desenvolvido faltando apenas a implemnetação da comunicação I2C (escravo) para enviar os dados necessarios para a placa de gerenciamento. <br>
Comunicação I2C ja foi validada.


2- Firmware da placa de gerenciamento
- 30% desenvolvido desenvolvido faltando implementar a comunicação I2C(Mestre) para receber os dados da placa de potencia da fonte.<br>
Não esta desenvolvido a parte do SNMP,WatchDog, atualização Remota, Implementação de senha de acesso guardada em memoria, e integração dos dados na pagina de configuração.

3- Pagina de configuração da fonte.
80% desenvolvida, Layout precisa desenvolver a resposividade para possibilitar o acesso e utilização por dispositivo moveis.
Integração dos dados enviado pelo processamento da placa de gerenciamento.

## Particularidades do Projeto

A pagina de configuração é embarcada no chipXXX da placa de gerenciamento uma particularidade para poder embarca esta pagina os arquivo precisão passar por um programa de compressão e este programa so reconhece a extenção dos arquivos de  pagina web em **.htm** sendo assim todas as paginas devem ser criadas com esta extensão.

