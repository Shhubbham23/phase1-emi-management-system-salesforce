public with sharing class ContactController {
    @AuraEnabled (cacheable = true)
    public static Contact getContact(){
       list<contact> conList = [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 1];
       if(!conList.isEmpty()){
           return conList[0];
       }
       return null;
    }
}