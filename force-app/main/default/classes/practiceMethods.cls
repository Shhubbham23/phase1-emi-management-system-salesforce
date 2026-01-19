public class practiceMethods {

    public void createAccCon(string accName, string conName, integer count){
        account acc = new account();
        acc.Name = accName;
        insert acc;
        
        list<contact> conList = new list<contact>();
        for(integer i=1; i<=count; i++){
            contact con = new contact();
            con.lastname = conName;
            con.AccountId = acc.Id;
            conList.add(con);
        }
        if(conList.size()>0)
            insert conList;
    }
}