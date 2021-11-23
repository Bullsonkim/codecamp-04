import {BaseEntity, Entity, Column,PrimaryGeneratedColumn} from 'typeorm'

//typrom기능을 사용하여 class를 mysql로 변환 @데코레이터를 만나면 Entity로 던지라고 요청
//Entity함수 실행

@Entity()
export default class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment")  
    number!:number;

    @Column({type:"text"})
    writer! :string;
    
    @Column({type:"text"})
    title!: string;

    @Column({type:"integer"})
    age!: number;

}

//uuid / sting