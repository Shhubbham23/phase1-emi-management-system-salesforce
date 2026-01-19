public class OpportunityTriggerHandler {
	
    public static void handleActivitiesAfterInsert(){}
    
    public static void handleActivitiesAfterUpdate(List<Opportunity> newRecords){
        List<Task> taskListToInsert = new List<Task>();
        for(opportunity opp : newRecords){
            if(opp.StageName == 'Closed Won'){
                Task taskRecord = new Task();
                taskRecord.Priority = 'High';
                taskRecord.OwnerId = opp.OwnerId;
                taskRecord.Description = 'Please split the revenue amount amongst all team members';
                taskRecord.Status = 'Not Started';
                taskRecord.Subject = 'Split Revenue';
                taskRecord.WhatId = opp.Id;
                taskListToInsert.add(taskRecord);
            }
        }
        if(!taskListToInsert.isEmpty())
            insert taskListToInsert;
    }
}