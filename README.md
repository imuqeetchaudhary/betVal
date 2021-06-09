# BetVal Project
## Routes for User
### to register a new user
- user/register : post
```
{
    name:
    email:
    password:
}
```

### to login an existing user
- user/login :post
```
{
    email:
    password:
}
```

### to view the profile of an authenticated user
- user/profile :post

## Routes for Matches
### to upload .xlsx file to insert football match data in database
- football/upload
```
{
    file: (.xlsx)
}
```

### tp view list of football matches in database
- football/matches

## Routes for user balances
### to add and update balance for a user
- user-balance/add
```
{
    userId:
    normalBalance:
    freeBetBalance
}
```