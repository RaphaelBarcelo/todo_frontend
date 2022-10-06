export type Todo = {
    id:number;
    title:string;
    completed:boolean;
    onComplete:(id:number)=>void;
    onDelete:(id:number)=>void;
}