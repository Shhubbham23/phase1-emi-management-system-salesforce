public with sharing class EMIScheduleController {

    @AuraEnabled(cacheable=true)
    public static List<EMI__c> getEmis(Id loanId) {
        return [
            SELECT Id, Name, EMI_Amount__c, Due_Date__c, EMI_Status__c
            FROM EMI__c
            WHERE Loan__c = :loanId
            ORDER BY Due_Date__c
        ];
    }
}