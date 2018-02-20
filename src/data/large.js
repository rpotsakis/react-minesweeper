// mock data
const m =
  [
    [
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
    [
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': true,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      },
      {
        'hasMine': false,
        'revealed': false,
        'exploded': false
      }
    ],
  ];

export {
  m
}
