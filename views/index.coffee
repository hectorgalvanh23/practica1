doctype 5
html ->
    head ->
        title "Mi primer pagina con coffee"
    body ->
        h1 @parrafo
        p i for i in [1..10]
        
    section ->
        (a href: '/', -> "CLICK AQUI")
    
    