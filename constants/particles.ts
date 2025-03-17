export const PARTICLES_CONFIG = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {
    color: {
      value: COLORS.surface,
    },
  },
  particles: {
    color: {
      value: COLORS["decorative-lightest"],
    },
    links: {
      color: COLORS["decorative-lightest"],
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      value: 200,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  responsive: [
    {
      maxWidth: 768,
      options: {
        particles: {
          number: {
            value: 50,
          },
        },
      },
    },
    {
      maxWidth: 1024,
      options: {
        particles: {
          number: {
            value: 100,
          },
        },
      },
    },
    {
      maxWidth: 1280,
      options: {
        particles: {
          number: {
            value: 125,
          },
        },
      },
    },
    {
      maxWidth: 1536,
      options: {
        particles: {
          number: {
            value: 150,
          },
        },
      },
    },
  ],
};
