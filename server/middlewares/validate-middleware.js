const validate = (schema) => async (req, res, next) => {
  try {
      const parsedBody = await schema.parseAsync(req.body);
      req.body = parsedBody;
      next();
  } catch (err) {
      const status = 422; // Change status to 422 for validation error
      const message = "Fill the input properly";
      const extraDetails = err.errors[0].message;

      const error = {
          status,
          message,
          extraDetails,
      };

      console.error(error); // Log error
    //  res.status(status).json({ error });
    next(error); // Send error response
  }
};

module.exports = validate;
