"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideo = exports.updateVideo = exports.createVideo = exports.getVideo = exports.getVideos = void 0;
const Video_1 = __importDefault(require("./Video"));
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let allVideos = yield Video_1.default.find();
        res.json(allVideos);
    }
    catch (error) {
        console.log(error);
        res.json('Not found any videos');
    }
});
exports.getVideos = getVideos;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let videoFound = yield Video_1.default.findById(req.params.id);
        console.log(videoFound);
        return res.json(videoFound);
    }
    catch (error) {
        console.log(error);
        res.json('Video not found');
    }
});
exports.getVideo = getVideo;
const createVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let videoFound = yield Video_1.default.findOne({ url: req.body.url });
        if (videoFound)
            return res.send('Video already exist');
        else {
            let video = new Video_1.default(req.body);
            let savedVideo = yield video.save();
            res.send(savedVideo);
        }
    }
    catch (error) {
        res.send(error);
    }
});
exports.createVideo = createVideo;
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let videoUpdated = yield Video_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(videoUpdated);
        res.json(videoUpdated);
    }
    catch (error) {
        console.log(error);
        res.json("It wasn't updated");
    }
});
exports.updateVideo = updateVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let deleteVideo = yield Video_1.default.findByIdAndDelete(req.params.id);
        res.json(deleteVideo);
    }
    catch (error) {
        console.log(error);
        return res.json('Video to deleted not found');
    }
});
exports.deleteVideo = deleteVideo;
