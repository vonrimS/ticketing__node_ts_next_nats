import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test1@gmail.com",
            password: "123456sadwwww"
        })
        .expect(201);
});

it('returns a 400 with an invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test2@gmail.c1om",
            password: "123456sadwwww"
        })
        .expect(400);
});

it('returns a 400 with an invalid password', async () => {
    return request(app)
        .post('/api/users/signin')
        .send({
            email: "test2@gmail.c1om",
            password: "123456sadwwwwWRONG"
        })
        .expect(400);
});

it('returns a 400 with missing email and password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "test2@gmail.com"
        })
        .expect(400);

    await request(app)
        .post('/api/users/signup')
        .send({
            password: "123456sadwwww"
        })
        .expect(400);
});
