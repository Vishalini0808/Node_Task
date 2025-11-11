//  POST → BODY
export const userController = (req, res) => {
  console.log(req.body);

  const { name, subject } = req.body;

  try {
    if (name === "React") {
      return res.status(200).json({
        message: " Successfully done using BODY",
        data: name,
      });
    }

    if (subject === "react") {
      return res.status(200).json({
        message: " Successfully done using BODY",
        data: subject,
      });
    }

    return res.status(404).json({ message: " Data is not correct" });

  } catch (error) {
    res.status(400).json({ message: " Bad Request" });
  }
};


//  GET → PARAMS
export const dataController = (req, res) => {
  console.log(req.params);

  const { user_id } = req.params;

  if (user_id === "100") {
    return res.status(200).json({
      message: ` Received your ID: ${user_id}`,
    });
  }

  res.status(404).json({ message: " Invalid ID" });
};


//  GET → QUERY
export const quesryController = (req, res) => {
  console.log(req.query);

  const { name, age } = req.query;

  return res.status(200).json({
    message: " Query received",
    yourData: { name, age },
  });
};


//  GET → HEADERS
export const headerController = (req, res) => {
  console.log(req.headers);

  const token = req.headers["auth-token"];

  if (!token) {
    return res.status(404).json({
      message: " No token in headers",
    });
  }

  res.status(200).json({
    message: " Header received successfully",
    token: token,
  });
};
