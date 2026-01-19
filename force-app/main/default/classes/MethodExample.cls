public class MethodExample {

    public integer exOne(integer num){
        integer result =  num+1;
        return result;
    }
    
    public void exTwo(string fname, string lname){
        account acc = new account();
        acc.name = fname +' '+lname;
        insert acc;
        contact con = new contact();
        con.accountId= acc.id;
        con.lastname = lname;
        insert con;
    }
    
    public void exThr(string lname){
        client__c clit = new client__c();
        clit.last_name__c = lname;
        insert clit;
        address__c addr = new address__c();
        addr.client__c= clit.id;
        insert addr;
    }
    
}