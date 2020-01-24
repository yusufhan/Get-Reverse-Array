function main() {
    var a = createArray(5);
    var i, j, temp;
    
    for (i = 0; i <= 4; i++) {
        a[i] = i + 1;
    }
    for (i = 0; i <= 1; i++) {
        temp = a[4 - i];
        a[4 - i] = a[i];
        a[i] = temp;
    }
}
