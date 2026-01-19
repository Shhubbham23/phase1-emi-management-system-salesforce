public class ContactTriggerHandler {
	
    public static void 	updatePhone(list<contact> newList){
        set<id> accId = new set<id>();
        for(contact c : newList){
            if(c.phone == null)
                accId.add(c.AccountId);
        }
        map<id,string> phoneMap = new map<id,string>();
        for(Account ac : [select id, phone from account where phone != null and id in:accId]){
            phoneMap.put(ac.id,ac.phone);
        }
        for(contact c : newList){
            if(c.phone == null && phoneMap.ContainsKey(c.AccountId)){
                c.phone = phoneMap.get(c.AccountId);
            }
        }
    }
    
}