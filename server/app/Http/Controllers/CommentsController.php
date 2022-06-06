<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Http\Requests\StoreCommentsRequest;
use App\Http\Requests\UpdateCommentsRequest;
use App\Http\Resources\CommentsResource;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //$user = $request->user();
        return CommentsResource::collection(Comments::paginate(6));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCommentsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCommentsRequest $request)
    {
        $result = Comments::create($request->validated());
        return new CommentsResource($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comments  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comments $comment, Request $request)
    {
        $user = $request->user();
        if($user->id !== $comment->user_id){
            return abort(403,'Action non autorisée.');
            //return response()->json($comment);
        }

        return new CommentsResource($comment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommentsRequest  $request
     * @param  \App\Models\Comments  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCommentsRequest $request, Comments $comment)
    {
        $comment->update($request->validated());
        return new CommentsResource($comment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comments  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comments $comment, Request $request)
    {
        $user = $request->user();
        if($user->id !== $comment->user_id){
            return abort(403,'Action non autorisée.');
        }
        $comment->delete();
        return response('',204);
    }
}
