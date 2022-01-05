function getSessionData(req) {
  const seessionData = req.session.flashedData;

  req.session.flashedData = null;

  return seessionData;
}

function flashDataToSession(req, data, action) {
  req.session.flashedData = data;
  req.session.save(action);
}

module.exports = {
  getSessionData: getSessionData,
  flashDataToSession: flashDataToSession,
};
