# GeoJson-mapa

Essa aplicação pode navegar em um mapa, adicionar popup's, nos popup's pode achar o nome e localização.
Essa aplicação sava o popup adicionado para o futuro.

Para acessar o Login há um usuário: admin@admin.com com a senha: secret_admin;

Pode-se registrar um novo usuário, para isso na página /register deve fornecer nome do usuário, email e password.

Para acesso da pagina register há um botão na página login.

Assim que logado, sera redirecionado para a página /map.

Aqui terá um map começando na posição [0, 0] e seguindo para a posição, aproximada, atual do usuário.

Em cima do mapa há um nav com as opções, registrar usuário, que envia para a página /register, cadastrar posições, cadastrar polígonos e mapa com posições e polígonos.

Ao clicar em cadastrar posições, aparecera logo em baixo um input para escrever o nome do lugar, e ao dar um simples click no mapa irá preencer a latitude e a longitute. Por fim apertando no botão nova posição, irá adicionar o ponto no map, como popup, e no banco de dados, desde que haja um nome.

Ao clickar no cadastrar polígonos aparecerá dois inputs, um para o nome e outro para cor. Clicando no map irá aparecer o primeiro ponto do polígono na coordenadas, apertando em três pontos do mapa, estará apto a adicionar um polígono, para isso deve primeiro pressionar o botão adicionar coordenadas ao polígono, e em seguida novo polígono.

Para adicionar multipolygon deve adicionar pelo menos 3 pontos, seguindo o passo anterior, e apertar em Adicionar Coordenadas ao Polígono, então clicando em mais pontos e novamente adicionar Coordenadas ao Polígono, repetindo esse processo até finalizar o multipolygon, para então adicionar ao banco e ao mapa, deve apertar no botão Novo Polígono.

Uma collectionPoints será criada quando houver mais de uma posição no banco, assim como CollectionPolygons

Pressionando no Mapa com Posições e Polígonos o botão muda para Mapa com Posições e se apertado novamente muda para Mapa com Polígonos. Quando for Mapa com Posição e Polígonos aparecerá os popups de posições e os polígonos/multipolígonos. Quando for Mapa com Posições, mostrará apenas as Posições no mapa e quando for Mapa com polígonos, no mapa aparecerá apenas os polígonos e multipolígonos.

Ao Pressionar os popups de posição haverá dois icones, uma para deletar a posição, do mapa e do banco, enquanto a outra poderá editar o nome da posição.

Ao pressionar o polígono, aparecerá um popup com a opção de deletar o mesmo.

Para o funcionamento da aplicação, pode ser usado docker-compose up, caso haja docker compose instalado na máquina.