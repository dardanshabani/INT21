function fibonaci() 
{
    var a = 0, b = 1, f = 1;
    for(var i = 1; i <= 20; i++) 
    {
        f = a + b;
        a = b;
        b = f;
        document.write(f + " "); 
    }
            
}
     