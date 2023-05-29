function sum(a,b){
    return parseInt(a) + parseInt(b);
}


function retornaNomeusuario(user){
    var ds = DatasetFactory.getDataset("colleague", ["colleagueName"],[
        DatasetFactory.createConstraint("colleagueId", user,user, ConstraintType.MUST)
    ],null);

    return ds.values[0].colleagueName;
}