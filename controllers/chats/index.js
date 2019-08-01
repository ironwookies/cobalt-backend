const mongoose = require('mongoose');

const Chat = require('./../../models/Chat');
const Message = require('./../../models/Message');

exports.createChat = async (req, res, next) => {

    if(!req.body.users       ||
       !req.body.name        ||
       !req.body.description ||
       !req.body.type    
    ){
        return res.status(422).json({message: 'Chat could not be created'});
    }else{
        try{
            req.body.users.forEach((user)=>{
                if(!mongoose.Types.ObjectId.isValid(user)){
                    return res.status(404).json({message: 'Invalid users'});
                }
            });

            let newChat = new Chat(req.body);

            newChat.save((error)=>{
                if(error){
                    return res.status(422).json({message: 'Chat could not be created'});
                }
            });

            return res.status(200).json({message: 'Chat created'});

        }catch(error){
            next(error);
        }
    }
};

exports.getChatHistory = async (req, res, next) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({message: 'Chat not found'});
        }

        let chatHistory = await Chat.findById(req.params.id).populate('messages');

        if(!chatHistory){
            return res.status(404).json({message: 'This chat has no history'});
        }

        return res.status(200).json(chatHistory);

    }catch(error){
        next(error);
    }
};

exports.addMessage = async (req, res, next) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({message: 'Chat not found'});
        }

        let message = new Message(req.body);

        message.save((error)=>{
            if(error){
                return res.status(422).json({message: 'Message could not be sent'});
            }
        });

        await Chat.findByIdAndUpdate(req.params.id,{$addToSet: {messages: message._id}});

        return res.status(200).json({message: 'Sent'});

    }catch(error){
        next(error);
    }
};

exports.getChatGroups = async (req, res, next) => {
    try{
        let chatGroups = await Chat.find({users: mongoose.Types.ObjectId(req.user._id)}).select('-messages');
        res.status(200).json(chatGroups);
    }catch(error){
        next(error);
    }
}