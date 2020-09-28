function confirmation()
{
    var ret=confirm("Do you want to continue");
    if(ret==true)
    {
        document.write("User want to continue");
        return true;
    }
    else
    {
        document.write("User do not want to continue");
        return false;
    }
}