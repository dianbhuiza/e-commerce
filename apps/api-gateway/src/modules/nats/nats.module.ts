import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env } from 'src/config/env';
import { NATS_CLIENT } from 'src/shared/const';

@Module({
    imports: [
        ClientsModule.register([{
            name: NATS_CLIENT,
            transport: Transport.NATS,
            options: {
                urls: env.NATS_SERVERS,
            },
        }]),
    ],
    exports: [
        ClientsModule.register([{
            name: NATS_CLIENT,
            transport: Transport.NATS,
            options: {
                urls: env.NATS_SERVERS,
            },
        }]),
    ]
})
export class NatsModule {}
