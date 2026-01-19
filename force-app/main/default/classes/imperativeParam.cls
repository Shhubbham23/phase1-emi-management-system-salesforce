public class imperativeParam {
    public class inputWrapper{
        public string name;
        public string activeStatus;
    }
    @AuraEnabled
    public static list<account> getAccountsRelatedToName(string name){
        return [select id, name, active__c from account where name =: name];
    }
    @AuraEnabled
    public static list<account> getAccountsRelatedToNameList(list<string> nameList){
        system.debug('data--- '+nameList);
        return [select id, name, active__c from account where name IN: nameList];
    }
    @AuraEnabled
    public static list<account> getAccounts(inputWrapper input){
        return [select id, name, active__c from account where name =: input.name and active__c =: input.activeStatus];
    }
    @AuraEnabled
    public static list<account> getActiveStatusAccount(string activeStatus){
        return [select id, name, accountNumber from account where active__c =: activeStatus];
    }
}