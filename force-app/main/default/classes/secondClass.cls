public class secondClass {
  public string getFullName(string firstName, string lastName){
        string fullName = firstName + '' + lastName;
        return fullName;
    }
    
    public void createAcc(string name){
        Account acc = new account();
        acc.name = name;
        insert acc;
    }
}