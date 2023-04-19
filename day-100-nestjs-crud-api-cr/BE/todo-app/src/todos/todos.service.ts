import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../models/todo.model';
@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoModel(createTodoDto);

    return await newTodo.save();
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  // async remove(id: string) {
  //   console.log(id);
  //   const result = await this.todoModel.findByIdAndRemove({ _id: id });
  //   return result;
  // }

  async remove(title: string) {
    console.log(title);
    const result = await this.todoModel.findOneAndDelete({ title: title });
    return result;
  }
}
