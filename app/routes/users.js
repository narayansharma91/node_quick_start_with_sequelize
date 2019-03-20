const registerUserRoutes = ({
  Router,
  services: {
    userService: { getUserService, getUserDetailService },
    registerAutoLoad: { apiResponse },
  },
}) => {
  const router = Router();
  router.get(
    '/',
    apiResponse(async () => {
      const users = await getUserService();
      return {
        status: 200,
        data: users,
      };
    }),
  );
  router.get(
    '/:id',
    apiResponse(async (req) => {
      const user = await getUserDetailService(req.params.id);
      return {
        status: 200,
        data: user,
      };
    }),
  );

  return router;
};
module.exports = { registerUserRoutes };
