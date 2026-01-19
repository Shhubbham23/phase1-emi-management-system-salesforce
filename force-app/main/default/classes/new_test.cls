public class new_test {
    public list<contact> getContacts(){
        list<contact> conList = new list<contact>();
       conList = [select id from contact where accountid != null];
        return conList;
    }
    
    public void createContact(string lname, id accId){
        contact con = new contact();
        con.lastname = lname;
        con.accountId = accId;
        insert con;
    }
    
     public id createAccount(string sName){
        account acc = new account();
        acc.name = sName;
        insert acc;
        return acc.id;
    }
    
    public list<account> getAccount(string name){
        list<account> accList = new list<account>();
            accList = [select id, name from account where name =: name];
            return accList;
    }
}