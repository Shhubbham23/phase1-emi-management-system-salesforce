public class wireClass {
	@AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        return [select id, name, active__c from account];
    }
}