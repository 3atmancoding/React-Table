export const column = [
  {
    title: 'Id',
    key: 'id',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Username',
    key: 'username',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Address',
    key: 'address',
    render: (record) => {
      return Object.values(record.address)
        .filter((val) => typeof val !== 'object')
        .join(' ');
    },
  },
  {
    title: 'Phone',
    key: 'phone',
  },
  {
    title: 'Website',
    key: 'website',
  },
  {
    title: 'Company',
    key: 'company',
  },
];
