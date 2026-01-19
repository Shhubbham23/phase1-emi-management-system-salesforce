public with sharing class AccountController{
    @AuraEnabled (cacheable = false)
   public static list<account> getAccountsOwn(){
    return [select id, name from account limit 5];
   }
}