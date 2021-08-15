function changeProductList(type, element) {
    var tabs = document.getElementsByClassName('category-list__item');
    for (i = 0 ; i < tabs.length ; i++) {
        tabs[i].style.background = 'unset';
    }
    element.style.background = '#f1f1f1';
    element.style.borderRadius = '5px';
    var current = document.getElementsByName(type);
    for (i= 0 ; i <current.length ; i++ ){
        current[i].style.display = 'block';
    }
    switch (type) {
        case 'hoaqua':
            {
                var dongchais =  document.getElementsByName('dongchai');
                for ( i = 0 ; i < dongchais.length ; i++)
                    dongchais[i].style.display = 'none';
            }
            {
                var cafes =  document.getElementsByName('cafe');
                for ( i = 0 ; i <cafes.length ; i++)
                    cafes[i].style.display = 'none';
            }
            break;
        case 'dongchai':
            {
                var hoaquas =  document.getElementsByName('hoaqua');
                for ( i = 0 ; i < hoaquas.length ; i++)
                    hoaquas[i].style.display = 'none';
            }
            {
                var cafes =  document.getElementsByName('cafe');
                for ( i = 0 ; i < cafes.length ; i++)
                    cafes[i].style.display = 'none';
            }
            break;
        case 'cafe':
            {
                var hoaquas =  document.getElementsByName('hoaqua');
                for ( i = 0 ; i < hoaquas.length ; i++)
                    hoaquas[i].style.display = 'none';
            }
            {
                var dongchais =  document.getElementsByName('dongchai');
                for ( i = 0 ; i < dongchais.length ; i++)
                    dongchais[i].style.display = 'none';
            }
            break;
    }
}
