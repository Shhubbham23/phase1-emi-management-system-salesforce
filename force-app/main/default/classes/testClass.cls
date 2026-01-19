public class testClass {
  	list<contact> conList = new list<contact>();
        public testClass (){
            conList = [select id from contact order By createdDate desc limit 10];
        }
    
   public testClass(id accId){
            conList = [select id,name from contact where accountId =: accId];
        }
    
    public void call1to100(){
        for(integer i=1;i<=100;i++){
            system.debug(i);
        }
    }
    
     public void call100to1(){
        for(integer k=100;k>=1;k--){
            system.debug(k);
        }
    }
    
    public void callNumber(integer num1, integer num2){
        if(num1 < num2){
            for(integer i=num1; i<=num2; i++){
                system.debug(i);
            }
        }
        else if(num1 > num2){
            for(integer i=num1; i>num2; i--){
                system.debug(i);
            }
        }
    }
    
    public list<account> getAccounts(string name){
        list<account> accList = new list<account>();
        accList = [select id, name from account where name = : name];
        return accList;
    } 
    
    public id createContact(string firstName, string lastName){
        contact con = new contact();
        con.firstname = firstName;
        con.lastname = lastName;
        insert con;
        return con.id;
    }
    
     public static list<contact> createContacts(string firstName, string lastName, integer countOfContact){
         list<contact> conList = new list<contact>();
         for(integer i=1;i<=countOfContact; i++){
            contact con = new contact();
        	con.firstname = firstName;
        	con.lastname = lastName;
       		conList.add(con);
         }
        insert conList;
         return conList;
    }
    
    public static list<account> getAccountByContactId(set<id> contactId){
        set<id> accountId = new set<id>();
        for(contact con : [select accountId from contact where id =: contactId and accountId != null]){
            accountId.add(con.accountId);
        }
        list<account> accList = [select id, name from account where id in: accountId];
        return accList;
    }
        
        
        
        
        
        
        
        
        
}