//Exercise 1: 
function capitalize_first_letter(s){
    var new_s = s.charAt(0).toUpperCase();
    for(var i = 1; i<s.length; i++){
        if(s.charAt(i) == " "){
            new_s += s.charAt(i);
            i++;
            new_s += s.charAt(i).toUpperCase();
            continue
        }
        new_s += s.charAt(i);
    }
    return new_s; 
} 

s = "the quick brown fox"
console.log(capitalize_first_letter(s));

//Exercise 2:
function max(a,b,c){
    var largest = a; 
    if (a < b){
        if(b < c){
            largest = c;
        }
        largest = b;
    }
    return largest;
} 
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

//Exercise 3:
function right(s){
    if (s.length < 3){
        return s;
    }
    var new_s = s.charAt(s.length-3)+s.charAt(s.length-2)+s.charAt(s.length-1);
    for (var i = 0; i<s.length-3; i++){
        new_s += s.charAt(i);
    }
    return new_s;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//Exercise 4:
function angle_Type(d){
    if (0<d && d<90){
        return("Acute angle")
    }else if(90<d && d<180){
        return("Obtuse angle")
    }else{
        switch(d){
            case 90:
                return("Right angle")
            case 180:
                return("Straight angle")
        default:
            return("Invalide")
        }
    }
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

//Exercise 5: 
function array_max_sum(arr,n){
    var max_sum = 0;
    for (let i = 0; i < arr.length - n +1; i++) {
        count_sum = 0;
        for(let j = 0 ; j < n ; j++){
            count_sum += arr[i+j];
        }
        if (count_sum > max_sum){
            max_sum = count_sum;
        }
    }
    return max_sum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
