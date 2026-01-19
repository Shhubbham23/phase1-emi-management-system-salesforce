public class accountTest {
	
    public static List<Opportunity> getOpportunitiesByAccountId(Id accountId){
        if(accountId == null){
            return new List<opportunity>();
        }
        
        return [select id, name from opportunity where accountId =: accountId];
    }
    
    public static List<Contact> getContactByAccountNo(string AccountNumber){
        if(AccountNumber == null){
            return new List<Contact>();
        }
        
        return [select id, name from contact where account.AccountNumber =: AccountNumber];
    }
    
    public map<id, contact> getContactMap(List<id> conIds){
        map<id, contact> conIdVsConMap = new map<id,contact>();
        for(Contact con : [select id, name from contact where id IN: conIds]){
            conIdVsConMap.put(con.Id, con);
        }
        return conIdVsConMap;
    }
    
}