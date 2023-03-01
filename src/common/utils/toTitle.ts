export function toTitle(title : string) : string {
    let aux = title.split(' ');
    if(aux.length > 1){
        aux[0] = aux[0].charAt(0).toUpperCase() + aux[0].slice(1);
        aux[1] = aux[1].charAt(0).toUpperCase() + aux[1].slice(1);
        return aux.join(' ');

    }else{
        return title.charAt(0).toUpperCase() + title.slice(1);
    }
    
}