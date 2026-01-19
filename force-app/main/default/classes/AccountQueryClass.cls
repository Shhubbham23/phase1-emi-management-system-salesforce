public class AccountQueryClass {
    
    
    public void queryAndMapAccounts() {
        
        List<Account> accountList = [SELECT Id, Name FROM Account LIMIT 10];

        
        Map<Id, Account> accountMap = new Map<Id, Account>();

        
        for (Account acc : accountList) {
            accountMap.put(acc.Id, acc);
        }
        
        set<id> accids = new set<id>();
        accids=accountMap.Keyset();
          List<Contact> conList = [SELECT Id, Name FROM Contact where accountid in:accids];
    }
    

}