public class LWCClass {
@AuraEnabled
    public static list<account> getAccounts(){
        return [select id, name, active__c from account];
    }
    //method should have annotations @AuraEnabled
    //method should be global or public
    //method should be static
}