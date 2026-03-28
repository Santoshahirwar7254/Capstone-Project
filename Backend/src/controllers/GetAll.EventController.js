const { AllEventService } = require("../services/services");

const GetEvents = async (req, res) => {
  try {
    const events = await AllEventService();

    res.status(200).json({
      success: true,                 
      message: "Events fetched successfully ",  
      events                         
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "Server Error "
    });
  }
};

module.exports = GetEvents;