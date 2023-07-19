4 -Chegou a hora de mostrar o quanto você sabe colocar no papel (ou
code) o que pensa. Você deve pensar, modelar, programar e testar
um modelo de classes baseado em uma situação da vida real.

## E-commerce Shoope-Growdev

Abstrações:

# 1 - Usuarios

- Todo usuario deve ter: id, nome, username e carrinho
- Todo usuario pode fazer: add, remove e view dos produtos no seu carrinho

# 2 - Produtos

- Todo produto deve ter: id, nome, valor, avaliacoes, comentarios
- Todo produto pode fazer:

            show output -> Produto Tenis - R$199,00
            showDetails output -> Produto Tenis - R$199,00
                                    @maria: ótimo custo-beneficio@joao: ruim

            addComentario - precisa receber o texto e o nome do usuario (username) que vai adicionar o comentario
            addAvaliacao - precisa do numero (1 a 5) e o nome do usuario (username) que adicionou a avalicao

OBS: Armazenar os dados em um banco de dados em memória (listas).
