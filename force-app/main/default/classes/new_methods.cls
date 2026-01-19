public class new_methods {
    public string lowerCaseMethod(string arg){
        return arg.tolowercase('fr');
    }
    
    public string checkChar(string arg){
        String updatedString='';
        system.debug(arg.charAt(1));
        if(arg.contains('r') && (arg.charAt(1) == 82 || arg.charAt(1) == 114 )){
            updatedString = arg.touppercase();
        }else{
            updatedString = arg.tolowercase();
        }
        return updatedString;
    }
    
    public void cerateContact(map<id, integer> accIdVsNumofContactMap){
        list<contact> conList = new list<contact>();
        for(Id accId : accIdVsNumofContactMap.keyset()){
            for(integer i=1; i<=accIdVsNumofContactMap.get(accid);i++){ //i=0,5
                contact con = new contact();
                con.accountId = accId;
                con.lastname = 'accIdcon';
                conList.add(con);
            }
        }
        insert conList;
    }
}