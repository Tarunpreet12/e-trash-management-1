module.exports = function(app,model) {

  app.get('/api/collectionpoint', findAllCollectionPoints);
  app.post('/api/collectionpoint', createCollectionPoint);
  app.delete('/api/collectionpoint/:cPointId', deleteCollectionPoint);
  function findAllCollectionPoints(req, res) {
    model.collectionPointModel.findAllCollectionPoints().then(function(data)
    {
      if(data)
      {
        res.json(data);
      }
      else
      {
        res.json([{}]);
      }
    },function(err){
      res.json(err);
    });
  }
  function createCollectionPoint(req, res) {
    var cpoint = req.body;
    model.collectionPointModel.createCollectionPoint(cpoint).then(function(data)
    {
      res.json(data);
    },function(err){
      res.json(null);
    });
  }
  function deleteCollectionPoint(req,res){
    var cPointId=req.params['cPointId'];
    model.collectionPointModel.deleteCollectionPoint(cPointId).then(function(data){
      res.json({success:true});
    });
  }
  /*
  app.get('/api/user/:userId/website', findAllWebsitesForUser);
  app.get('/api/website/:websiteId', findWebsiteById);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  function createWebsite(req, res) {
    var website = req.body;
    website.developerId=req.params['userId'];
    model.websiteModel.createWebsiteForUser(website).then(function(data)
    {
      res.json(data);
    },function(err){
      res.json(null);
    });
  }

  function findAllWebsitesForUser(req, res) {
    var userId=req.params['userId'];
    model.websiteModel.findAllWebsiteForUser(userId).then(function(data)
    {
      if(data)
      {
        res.json(data);
      }
      else
      {
        res.json([{}]);
      }
    },function(err){
      res.json(err);
    });
  }

  function findWebsiteById(req, res) {
    var websiteId=req.params['websiteId'];
    model.websiteModel.findWebsiteById(websiteId).then(
    function(data){
      if(data==null)
      {
        res.status(404);
        res.json({});
      }
      else
      {
        res.json(data);
      }
    },function(err){
       res.status(500);
       res.json({});
     }
    );
  }

  function updateWebsite(req,res){
    var websiteId=req.params['websiteId'];
    var website=req.body;
    website._id=websiteId;
    model.websiteModel.updateWebsite(website).then(function(data)
    {
      res.json({success:true});
    },function(err)
    {
      res.status(400);
      res.json(null);
    });
  }

  function deleteWebsite(req,res){
    var websiteId=req.params['websiteId'];
    model.websiteModel.deleteWebsite(websiteId).then(function(data){
      res.json({success:true});
    });
  }
  */
}
