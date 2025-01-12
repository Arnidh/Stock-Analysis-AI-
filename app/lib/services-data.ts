export const services: Array<{
    name: string;
    description: string;
    href: string;
    icon: "chart" | "sentiment" | "personal" | "insight" | "simulation" | "risk";
  }> = [
    {
      name: "Stock Prediction",
      href: "/prediction",
      description:
        "Get a short stock prediction based on the stock historical data.",
      icon: "chart",
    },
    {
      name: "Sentiment Analysis",
      href: "/sentiment-analysis",
      description: "Determine the market sentiment surrounding specific stocks.",
      icon: "sentiment",
    },
    {
      name: "Technical Analysis",
      href: "/technical-analysis",
      description:
        "Studying charts and patterns to identify trends and predict future price movements.",
      icon: "personal",
    },
    {
      name: "Fundamental Analysis",
      href: "/fundamental-analysis",
      description:
        "Examining a company's financial statements, management team, and industry trends to evaluate its potential for growth.",
      icon: "insight",
    },
    {
      name: "Machine Learning Algo",
      href: "/ml-algo",
      description:
        "Employing algorithms to analyze large datasets and make predictions based on patterns and trends.",
      icon: "simulation",
    },
    {
      name: "Risk Assessment",
      href: "/risk-assessment",
      description:
        "Assess the risk level of your portfolios or potential investments.",
      icon: "risk",
    },
  ];
  